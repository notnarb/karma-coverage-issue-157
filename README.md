##About
Issue reproduction for https://github.com/karma-runner/karma-coverage/issues/157

## How to run

```
npm install
karma start
```

should result in the following error:

```
DEBUG [coverage]: Writing coverage to /home/notnarb/Workspace/karma-coverage-157/coverages/Firefox 38.0.0 (Ubuntu 0.0.0)
ERROR [coverage]: [TypeError: Cannot read property 'text' of undefined]
TypeError: Cannot read property 'text' of undefined
    at /home/notnarb/Workspace/karma-coverage-157/node_modules/karma-coverage/node_modules/istanbul/lib/report/html.js:236:45
	at Array.forEach (native)
	at annotateFunctions (/home/notnarb/Workspace/karma-coverage-157/node_modules/karma-coverage/node_modules/istanbul/lib/report/html.js:219:26)
	at HtmlReport.Report.mix.writeDetailPage (/home/notnarb/Workspace/karma-coverage-157/node_modules/karma-coverage/node_modules/istanbul/lib/report/html.js:422:9)
	at /home/notnarb/Workspace/karma-coverage-157/node_modules/karma-coverage/node_modules/istanbul/lib/report/html.js:484:26
	at SyncFileWriter.extend.writeFile (/home/notnarb/Workspace/karma-coverage-157/node_modules/karma-coverage/node_modules/istanbul/lib/util/file-writer.js:57:9)
	at FileWriter.extend.writeFile (/home/notnarb/Workspace/karma-coverage-157/node_modules/karma-coverage/node_modules/istanbul/lib/util/file-writer.js:147:23)
	at /home/notnarb/Workspace/karma-coverage-157/node_modules/karma-coverage/node_modules/istanbul/lib/report/html.js:483:24
	at Array.forEach (native)
	at HtmlReport.Report.mix.writeFiles (/home/notnarb/Workspace/karma-coverage-157/node_modules/karma-coverage/node_modules/istanbul/lib/report/html.js:477:23)
```
