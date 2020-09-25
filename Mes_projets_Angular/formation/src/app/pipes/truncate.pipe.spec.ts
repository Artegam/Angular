import { TruncatePipe } from './truncate.pipe';

fdescribe('TruncatePipe', () => {
  it('create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('doit gérer le null', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform(null)).toBe(null);
  });

  it('doit gérer les chaines vide', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('')).toBe('');
  });

  it('doit gérer le short text text', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('e')).toBe('e');
  });

  it('doit gérer le nombre de caracteres avec une chaine courte', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('abcde', 2, '...')).toBe('ab...');
  });

  it('doit gérer le suffixe', () => {
    const pipe = new TruncatePipe();
    expect(pipe.transform('abcde', 4, '@@@')).toBe('abcd@@@');
  });

});
