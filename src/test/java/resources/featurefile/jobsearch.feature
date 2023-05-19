Feature: Job search test
  As a user I want to to test job search functionality on cv library site
@sanity @regression
 Scenario Outline: User should be able to verify Job Search Result Using Different Data Set
   Given I am on homepage
   When  I accept all coockeis
   And   I enter job title "<jobTitle>"
   And   I enter location "<location>"
   And   I Select distance "<distance>"
   Then  I click on more search option link
   And   I enter salary min "<salaryMin>"
   And   I enter Salary max "<salaryMax>"
   And   I select salary type "<salaryType>"
   And   I select job type "<jobType>"
   Then  I click on Find job button
   And   I verify result text "<result>"


   Examples:
     |jobTitle          |location               |distance      |salaryMin    |salaryMax    |salaryType     |jobType     |result     |
     |Tester            |Harrow,Greater London|5 miles         |30000        |50000       |Per annum      |Permanent   |Permanent Tester jobs in Harrow |
     |Manual tester     |Central London        |5 miles        |30000        |40000       |Per annum      |Permanent   |Permanent Manual Tester jobs in Central London|
     |IT Project Manager|London                |7 miles        |40000        |50000       |Per annum      |Permanent   |Permanent It Project Manager jobs in London   |
     |IT Developer      |Birmingham            |10 miles       |40000        |60000       |Per annum      |Permanent   |Permanent It Developer jobs in Birmingham     |
     |Automation Tester |Bristol(County)       |15 miles       |40000        |50000       |Per annum      |Permanent   |Permanent Automation Tester jobs in Bristol (County)|
     |Business analyst  |Cardiff               |10 miles       |30000        |60000       |Per annum      |Permanent   |Permanent Business Analyst jobs in Cardiff        |