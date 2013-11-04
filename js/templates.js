window.Project07.tmpl = window.Project07.tmpl || {};
Project07.tmpl.home = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="container">\r\n   <div class="well row">\r\n    <div class="input-group">\r\n      <input type="text" id="search-query" class="form-control" placeholder="Start typing an address ...">\r\n      <span class="input-group-btn">\r\n        <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search" ></span></button>\r\n      </span>\r\n    </div><!-- /input-group -->\r\n  </div>\r\n  <div class="row">\r\n    <div id="maps-wrapper" class="col-md-6">\r\n      <!-- <h1>Maps</h1> -->\r\n      <div id="map-canvas">\r\n      </div>\r\n    </div>\r\n    <div id="actions" class="col-md-6">\r\n      \r\n    </div>\r\n  </div>\r\n  <div id="reservations-wrapper" class="row">\r\n\r\n  </div>\r\n</div>\r\n';
}
return __p;
};
Project07.tmpl.miniNotification = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="fadeOut animated mini-notification '+
((__t=( classNames ))==null?'':__t)+
'">\n  '+
((__t=( message))==null?'':__t)+
'\n</div>';
}
return __p;
};
Project07.tmpl.reservationItem = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<tr class="reservation-item" data-id="'+
((__t=( id ))==null?'':__t)+
'">\n  <td>'+
((__t=( name ))==null?'':__t)+
'</td><td>'+
((__t=( address ))==null?'':__t)+
'</td>\n  <td>'+
((__t=( date ))==null?'':__t)+
'</td><td>Space No. '+
((__t=( spaceNum ))==null?'':__t)+
'</td>\n  <td>\n    <button class="btn btn-danger row cancel-reservation">\n      <span class="col-xs-12 col-sm-2 col-md-2 col-lg-2 glyphicon glyphicon-remove shopping-cart"></span>\n      <span class="hidden-xs hidden-sm col-md-10 col-lg-10 shopping-cart-label">Cancel Reservation</span>\n    </button>\n  </td>\n</tr>';
}
return __p;
};
Project07.tmpl.reservations = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<h3>Active Reservations</h3>\n<table id="reservations" class="table">\n</table>\n<div class="no-reservations">\n  \n</div>';
}
return __p;
};
Project07.tmpl.resultItem = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<div class="panel panel-default">\n    <div class="panel-heading">\n      <h4 class="panel-title">\n        <a data-toggle="collapse" data-parent="#accordion" href="#'+
((__t=( id ))==null?'':__t)+
'" data-id="'+
((__t=( id ))==null?'':__t)+
'" class="parking-lot">\n          '+
((__t=( name ))==null?'':__t)+
'\n        </a>\n      </h4>\n    </div>\n    <div id="'+
((__t=( id ))==null?'':__t)+
'" data-id="'+
((__t=( id ))==null?'':__t)+
'" class="panel-collapse collapse">\n      <div class="panel-body">\n        <div class="row">\n          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">'+
((__t=( address ))==null?'':__t)+
'</div>\n          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">\n            <button class="btn btn-success buy-now pull-right">\n              <span class="col-sm-4 glyphicon glyphicon-shopping-cart shopping-cart"></span> \n              <span class="hidden-xs hidden-sm-8 shopping-cart-label">Buy Full Day Pass</span>\n            </button></div>\n        </div>\n      </div>\n    </div>\n  </div>';
}
return __p;
};
Project07.tmpl.results = function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
with(obj||{}){
__p+='<h3 class="sub-title">Parking Spaces Found</h3>\n<div class="form-horizontal">\n  <div class="form-group">\n    <div class="hidden-xs col-sm-4 col-md-4 col-lg-3 control-label select-date">Select Date</div> \n    <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9"><input type="date" class="form-control date" required/></div>\n  </div>\n</div>\n<div class="panel-group" id="accordion">\n\n  \n  \n</div>';
}
return __p;
};
