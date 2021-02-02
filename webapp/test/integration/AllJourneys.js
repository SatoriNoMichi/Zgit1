/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 KredaSet in the list
// * All 3 KredaSet have at least one Orders

sap.ui.require([
	"sap/ui/test/Opa5",
	"Zgit1/ZGit1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"Zgit1/ZGit1/test/integration/pages/App",
	"Zgit1/ZGit1/test/integration/pages/Browser",
	"Zgit1/ZGit1/test/integration/pages/Master",
	"Zgit1/ZGit1/test/integration/pages/Detail",
	"Zgit1/ZGit1/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "Zgit1.ZGit1.view."
	});

	sap.ui.require([
		"Zgit1/ZGit1/test/integration/MasterJourney",
		"Zgit1/ZGit1/test/integration/NavigationJourney",
		"Zgit1/ZGit1/test/integration/NotFoundJourney",
		"Zgit1/ZGit1/test/integration/BusyJourney",
		"Zgit1/ZGit1/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});