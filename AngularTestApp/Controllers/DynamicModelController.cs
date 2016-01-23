using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Hosting;

namespace AngularTestApp.Controllers
{
    
    public class DynamicModelController : ApiController
    {
        [Route("api/DynamicModels")]
        [HttpGet]
        public IEnumerable<String> GetDynamicModels()
        {
            List<String> DynamicModels = new List<String>();
            String[] DynamicModelPaths=Directory.GetFiles(HostingEnvironment.MapPath("~/Controllers"),"*Controller.cs");
            foreach (string file in DynamicModelPaths)
            {
                String FileName = Path.GetFileName(file);
                DynamicModels.Add(FileName.Substring(0,FileName.IndexOf("Controller")));
            }
            DynamicModels.Remove("DynamicModel");
            return DynamicModels;
        }
    }
}
