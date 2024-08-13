export class PromiseSet {
  private readonly promises = new Set<Promise<any>>();

  public and(promise: Promise<any>): this {
    this.promises.add(promise);
    return this;
  }

  public async join(): Promise<void> {
    await Promise.all(this.promises);
    this.promises.clear();
  }
}
