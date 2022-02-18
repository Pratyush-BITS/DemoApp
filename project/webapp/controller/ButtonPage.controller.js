sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, MessageToast) {
		"use strict";

		return Controller.extend("com.sap.demo.project.controller.ButtonPage", {
			onInit: function () {
				MessageToast.show("hiii");
			},

			onClick: function (oEvent) {
				MessageToast.show("Navigating");
				var viewNo = oEvent.getSource().getProperty("text")
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo(viewNo);
			}
		
	});
	
});
