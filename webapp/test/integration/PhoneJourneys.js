/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"Zgit1/ZGit1/test/integration/NavigationJourneyPhone",
		"Zgit1/ZGit1/test/integration/NotFoundJourneyPhone",
		"Zgit1/ZGit1/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});