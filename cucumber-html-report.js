const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumber-json',
	reportPath: './reports/index.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '90'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'JULY 24th 2021'},
            {label: 'Execution End Time', value: 'JULY 24th 2021'}
        ]
    }
});
