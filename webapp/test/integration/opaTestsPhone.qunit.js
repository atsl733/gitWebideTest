/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"f1/f1/test/integration/PhoneJourneys"
	], function () {
		QUnit.start();
	});
});
