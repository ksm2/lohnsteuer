lohnsteuer
==========

> A library to calculate German wage tax and solidarity charges.


Getting Started
---------------

Install using Yarn:

    yarn add lohnsteuer

Alternatively, install using NPM:

    npm install --save lohnsteuer

**Note:** This package comes with TypeScript typings included.

Example usage with TypeScript:

```typescript
import { Bundesland, Input, Output, calculate } from 'lohnsteuer'

const input: Input = {
  // Year to calculate the tax for, 2014-2019 currently supported
  year: 2019,
  // The state (Bundesland) you calculate for
  state: Bundesland.HAMBURG,
  // The tax class (see https://www.sachsen.de/en/1451.htm)
  taxClass: 1,
  // Whether you have to pay the church tax
  churchTax: true,
  // The year you were born in
  yearOfBirth: 1990,
  // The health insurance add on your provider wants
  healthInsuranceAddOn: 0.9,
  // The gross year salary in euro cents, for € 35,000 this is:
  grossSalary: 35_000_00,
}

const output: Output = calculate(input)
```

The `output` contains the following fields, all of them are of type `number` and given in euro cents:

| Property                | Description                                                    |
|:------------------------|:---------------------------------------------------------------|
| `grossSalary`           | Gross month salary.                                            |
| `salaryTax`             | Salary tax (_Lohnsteuer_) per month.                           |
| `churchTax`             | Church tax (_Kirchensteuer_) per month.                        |
| `solidarityTax`         | Solidarity tax (_Solidaritätszuschlag_) per month.             |
| `wageTax`               | The complete wage tax, salary + church + solidarity tax.       |
| `healthInsurance`       | Health insurance (_Krankenversicherung_) per month.            |
| `pensionInsurance`      | Pension insurance (_Rentenversicherung_) per month.            |
| `unemploymentInsurance` | Unemployment insurance (_Arbeitslosenversicherung_) per month. |
| `careInsurance`         | Care insurance (_Pflegeversicherung_) per month.               |
| `socialCharges`         | Sum of all social charges above: HI + PI + UI + CI.            |
| `netSalary`             | The remaining net salary.                                      |


Features and Todos
------------------

- [x] Support basic wage tax calculation
- [x] Calculate social charge
- [x] Support special situation of Saxony
- [ ] Support for children
- [ ] Support for tax-free allowance
- [ ] Support private insurances
- [ ] Support care insurance without add on


License
-------

This software is licensed under the [MIT license](./LICENSE).
