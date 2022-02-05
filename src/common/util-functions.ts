export class UtilFunctions {
  static cartesian(...a: any[]): any[] {
    return a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
  }

  static shuffle<T>(unshuffled: T[]): T[] {
    return unshuffled
      .map((value: T) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }
}
