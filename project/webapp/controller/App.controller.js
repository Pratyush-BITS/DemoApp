sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,
	MessageToast) {
		"use strict";

		return Controller.extend("com.sap.demo.project.controller.App", {
			onInit: function () {

			},
			onClick: function (oEvent) {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("buttonPage");
			}
		});
	});
