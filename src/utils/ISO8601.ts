interface ParsedISO8601 {
  sign: string | number;
  years: string | number;
  months: string | number;
  weeks: string | number;
  d: string | number;
  h: string | number;
  m: string | number;
  s: string | number;
}

class ISO8601 {
  _duration: ParsedISO8601 | null = null;

  constructor(iso?: string) {
    if (iso) this._duration = this._transform(iso);
    return this;
  }

  _transform(iso: string) {
    const r =
      /(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/;

    const matches = iso.match(r);

    if (!matches) return null;
    return {
      sign: matches[1] === undefined ? "+" : "-",
      years: matches[2] === undefined ? 0 : matches[2],
      months: matches[3] === undefined ? 0 : matches[3],
      weeks: matches[4] === undefined ? 0 : matches[4],
      d: matches[5] === undefined ? 0 : matches[5],
      h: matches[6] === undefined ? 0 : matches[6],
      m: matches[7] === undefined ? 0 : matches[7],
      s: matches[8] === undefined ? 0 : matches[8],
    };
  }

  toString(iso?: string): string {
    const duration = iso ? this._transform(iso) : this._duration;
    if (!duration) return "";

    const formats = {
      hour: (hours: string | number) => (hours ? `${hours}h ` : ""),
      minutes: (minutes: string | number) => (minutes ? `${minutes}m ` : ""),
      seconds: (seconds: string | number) => (seconds ? `${seconds}s ` : ""),
    };

    const { h, m, s } = duration;
    return formats.hour(h) + formats.minutes(m) + formats.seconds(s);
  }
}

export default ISO8601;
