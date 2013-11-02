window.Project07.tmpl = window.Project07.tmpl || {};
Project07.tmpl.home = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="container">\r\n   <div class="well row">\r\n    <div class="input-group">\r\n      <input type="text" class="form-control">\r\n      <span class="input-group-btn">\r\n        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span></button>\r\n      </span>\r\n    </div><!-- /input-group -->\r\n  </div>\r\n  <div class="row">\r\n    <div id="maps-wrapper" class="col-xs-6 col-md-6">\r\n      <!-- <h1>Maps</h1> -->\r\n      <div id="map-canvas">\r\n      </div>\r\n    </div>\r\n    <div id="actions-wrapper" class="col-xs-6 col-md-6">\r\n      \r\n    </div>\r\n  </div>\r\n  <div id="reservations-wrapper" class="row">\r\n\r\n  </div>\r\n</div>\r\n';
}
return __p;
};
Project07.tmpl.reservationItem = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<tr><td>'+
((__t=( name ))==null?'':__t)+
'</td><td>'+
((__t=( location ))==null?'':__t)+
'</td><td>'+
((__t=( date ))==null?'':__t)+
'</td><td><button class="btn btn-danger">Cancel</button></tr>';
}
return __p;
};
Project07.tmpl.reservations = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<h3>Active Reservations</h3>\n<table id="reservations" class="table">\n</table>';
}
return __p;
};
Project07.tmpl.resultItem = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">\n          Structure #1\n        </a>\n      </h4>\n    </div>\n    <div id="collapseTwo" class="panel-collapse collapse">\n      <div class="panel-body form-horizontal">\n        <div class="form-group">\n          <div class="hidden-xs col-sm-4 col-md-4 col-lg-3 control-label select-date">Select Date</div> \n          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9"><input type="text" class="form-control " placeholder="MM-DD-YYY"/></div>\n        </div>\n        <div class="row">\n          <div class="col-sm-4 col-md-4 col-lg-3">No. slots left: <strong>14</strong></div>\n          <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9"><button class="btn btn-success buy-now">\n            <span class="col-sm-4 glyphicon glyphicon-shopping-cart shopping-cart"></span> \n            <span class="hidden-xs col-sm-8 shopping-cart-label">Buy Full Day Pass</span></button></div>\n        </div>\n      </div>\n    </div>\n  </div>';
}
return __p;
};
Project07.tmpl.results = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<h1>Results</h1>\n<div class="panel-group" id="accordion">\n  \n  \n</div>';
}
return __p;
};
