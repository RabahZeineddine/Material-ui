import has from 'has-values';
import moment, { Moment } from 'moment';

export default class Helper {
  static createIteratedArray(length: number): Array<number> {
    const array: number[] = [];
    for (let i = 0; i < length; i++) array.push(i);
    return array;
  }

  static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static isEmpty(data: any) {
    if (typeof data === 'undefined' || data === null) return true;
    if (typeof data === 'string') return !has(data.trim());
    return !has(data);
  }

  static getFormattedDate(date?: Date, utc: boolean = false, format = "DD/MM/YYYY"): string {
    if (!date) return "";
    let momentDate: Moment;
    try {
      if (utc) momentDate = moment(date).utc();
      else momentDate = moment(date);
      return momentDate.format(format);
    } catch (error) {
      console.warn(error);
      return "";
    }
  }
}
