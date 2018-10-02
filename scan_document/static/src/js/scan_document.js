openerp.scan_document = function (instance) {

     var QWeb = instance.web.qweb,
        _t = instance.web._t;

   instance.web.Sidebar.include({
        events:{
        	 "click .oe_document_scan": 'scan',
        },
        start:function(){
        		this._super();
        },

        scan: function (e) {
            console.debug("test");
        	var parent = this.getParent();
        	var model_name = parent.dataset.model;
        	var model_id = parent.get_selected_ids()[0];
            var scan_input= this.$el.find(".oe_document_scan_name");
            scan_input.blur();
            var scan_name = scan_input.val();
            console.debug(scan_name);
            var oReq = new XMLHttpRequest();
            oReq.open("GET", "http://127.0.0.1:5000/odoo_scan", true);
            oReq.responseType = "arraybuffer";

            oReq.onload = function (oEvent) {
            instance.web.blockUI();
            var arrayBuffer = oReq.response; // Note: not oReq.responseText
            if (arrayBuffer) {

                    var byteArray = new Uint8Array(arrayBuffer);
                    var date = new Date();
                    var filename = scan_name+".pdf";
                    var f = new File([byteArray],filename,{type:'application/pdf
'});
                    var query = new FormData();
                    query.append("callback","");
                    query.append("ufile",f);
                    query.append("model",model_name);
                    query.append("id",model_id);
                    var ret = $.ajax({
                                url: '/web/binary/upload_attachment',
                                type: 'POST',
                                data: query,
                                cache: false,
                                processData: false,  
                                contentType: false,   
                            });

           
                
              }
              instance.web.unblockUI();
            };

        oReq.send(null);
                
        
        	   
                       
        },
    });  


}