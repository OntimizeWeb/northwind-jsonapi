Feature: Expression Parser

  Scenario: No Expression Processing
    Given No Filter
    When Query submitted
    Then Return limit records

  Scenario: One Expression Processing
    Given One Filter
    When Query submitted
    Then One key record returned 

  Scenario: Two Expression Processing
    Given Two Filter
    When Query submitted
    Then Two records returned

  Scenario: Basic Expression Processing
    Given Basic Filter
    When Query submitted
    Then Basic row returned

  Scenario: Basic 2 Expression Processing
    Given Basic or Filter
    When Query submitted
    Then Basic 2 rows returned

  Scenario: Filter Expression Processing
    Given Filter Expression
    When Query submitted
    Then Filter 1 row returned

  Scenario: Filter 2 Expression Processing
    Given Filter or Expression
    When Query submitted
    Then Filter 2 rows returned