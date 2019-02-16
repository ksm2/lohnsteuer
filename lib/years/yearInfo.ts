import { Year2014 } from './2014/Year2014'
import { Year2015 } from './2015/Year2015'
import { Year2016 } from './2016/Year2016'
import { Year2017 } from './2017/Year2017'
import { Year2018 } from './2018/Year2018'
import { Year2019 } from './2019/Year2019'
import { AbstractYear } from './AbstractYear'

const YEARS: Record<number, AbstractYear> = {
  2014: new Year2014(),
  2015: new Year2015(),
  2016: new Year2016(),
  2017: new Year2017(),
  2018: new Year2018(),
  2019: new Year2019(),
}

export function yearInfo(year: number): AbstractYear {
  if (year in YEARS) {
    return YEARS[year]
  }

  throw new Error(`Formula missing for year ${year}.`)
}
