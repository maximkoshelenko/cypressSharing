Useful commands
jq -s 'map(.[0])' cypress/reports/cucumber/*.cucumber.json > cypress/reports/cucumber/combined.json
node generate.js