
var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonDir: './cypress/reports/cucumber/',
    output: './cypress/reports/cucumber/report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version": "1.0.0",
        "Test Environment": "PROD",
        "Browser": "Chrome 75.0.3770.142",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "LOCAL"
    }
};

reporter.generate(options);

process.exit();