$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job search test",
  "description": "As a user I want to to test job search functionality on cv library site",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all coockeis",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter salary min \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Salary max \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify result text \"\u003cresult\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I accept popup",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 20,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow,Greater London",
        "5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow"
      ],
      "line": 21,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;2"
    },
    {
      "cells": [
        "Manual tester",
        "Central London",
        "5 miles",
        "30000",
        "40000",
        "Per annum",
        "Permanent",
        "Permanent Manual Tester jobs in Central London"
      ],
      "line": 22,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;3"
    },
    {
      "cells": [
        "IT Project Manager",
        "London",
        "7 miles",
        "40000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent It Project Manager jobs in London"
      ],
      "line": 23,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;4"
    },
    {
      "cells": [
        "IT Developer",
        "Birmingham",
        "10 miles",
        "40000",
        "60000",
        "Per annum",
        "Permanent",
        "Permanent It Developer jobs in Birmingham"
      ],
      "line": 24,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;5"
    },
    {
      "cells": [
        "Automation Tester",
        "Bristol(County)",
        "15 miles",
        "40000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Automation Tester jobs in Bristol (County)"
      ],
      "line": 25,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;6"
    },
    {
      "cells": [
        "Business analyst",
        "Cardiff",
        "10 miles",
        "30000",
        "60000",
        "Per annum",
        "Permanent",
        "Permanent Business Analyst jobs in Cardiff\""
      ],
      "line": 26,
      "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9348093900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all coockeis",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Harrow,Greater London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter salary min \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Salary max \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify result text \"Permanent Tester jobs in Harrow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I accept popup",
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 4321212800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCoockeis()"
});
formatter.result({
  "duration": 275944200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1475178300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow,Greater London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 207057100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 335120700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 175073900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 343063100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 141226800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 187835800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 185577900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 204743800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 18771699200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPopup()"
});
formatter.result({
  "duration": 3972900,
  "status": "passed"
});
formatter.after({
  "duration": 830004600,
  "status": "passed"
});
formatter.before({
  "duration": 4411874200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all coockeis",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Manual tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Central London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select distance \"5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter salary min \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Salary max \"40000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify result text \"Permanent Manual Tester jobs in Central London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I accept popup",
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 4030965900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCoockeis()"
});
formatter.result({
  "duration": 350402100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manual tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 776044400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Central London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 190605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 440881400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 155297000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 348326700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 128283400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 172169900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 163169200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 212493900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Manual Tester jobs in Central London",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 4710029000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPopup()"
});
formatter.result({
  "duration": 6212700,
  "status": "passed"
});
formatter.after({
  "duration": 805343600,
  "status": "passed"
});
formatter.before({
  "duration": 4875935300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all coockeis",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"IT Project Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select distance \"7 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter salary min \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Salary max \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify result text \"Permanent It Project Manager jobs in London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I accept popup",
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 4040636700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCoockeis()"
});
formatter.result({
  "duration": 498239400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT Project Manager",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1676431100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 234056200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 392426900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 229289000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 484310500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 153986300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 169006600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 206278100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 294020800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent It Project Manager jobs in London",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 12522125900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPopup()"
});
formatter.result({
  "duration": 4287300,
  "status": "passed"
});
formatter.after({
  "duration": 729495800,
  "status": "passed"
});
formatter.before({
  "duration": 4430648700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all coockeis",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"IT Developer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Birmingham\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select distance \"10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter salary min \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Salary max \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify result text \"Permanent It Developer jobs in Birmingham\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I accept popup",
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 4031969100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCoockeis()"
});
formatter.result({
  "duration": 381980300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IT Developer",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1062382300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 181312800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 227702500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 176318800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 413563100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 142703100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 163891300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 186181400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 209251100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent It Developer jobs in Birmingham",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 18971129400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPopup()"
});
formatter.result({
  "duration": 4913000,
  "status": "passed"
});
formatter.after({
  "duration": 830091100,
  "status": "passed"
});
formatter.before({
  "duration": 4192061900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all coockeis",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Automation Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Bristol(County)\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select distance \"15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter salary min \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Salary max \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify result text \"Permanent Automation Tester jobs in Bristol (County)\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I accept popup",
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 4027508700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCoockeis()"
});
formatter.result({
  "duration": 316877600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 925147000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bristol(County)",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 375306800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 105783900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 157759600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 308323400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 135999600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 157117700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 136574600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 177719300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Tester jobs in Bristol (County)",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iVerifyResultText(String)"
});
formatter.result({
  "duration": 4151229700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPopup()"
});
formatter.result({
  "duration": 3227300,
  "status": "passed"
});
formatter.after({
  "duration": 726076900,
  "status": "passed"
});
formatter.before({
  "duration": 4378505200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;user-should-be-able-to-verify-job-search-result-using-different-data-set;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept all coockeis",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter job title \"Business analyst\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter location \"Cardiff\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I Select distance \"10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on more search option link",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I enter salary min \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter Salary max \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find job button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I verify result text \"Permanent Business Analyst jobs in Cardiff\"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I accept popup",
  "keyword": "And "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 4021366100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptAllCoockeis()"
});
formatter.result({
  "duration": 322668400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business analyst",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 921230300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cardiff",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 296335800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 182493100,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 149804300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMin(String)"
});
formatter.result({
  "duration": 410245800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMax(String)"
});
formatter.result({
  "duration": 130558000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 135270800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 133110000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobButton()"
});
formatter.result({
  "duration": 184585000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptPopup()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 825755700,
  "status": "passed"
});
});