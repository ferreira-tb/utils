export class PromiseChain {
  private readonly promises = new Set<Promise<any>>();

  public chain(promise: Promise<any>): this {
    this.promises.add(promise);
    return this;
  }

  public async join(): Promise<void> {
    await Promise.all(this.promises);
    this.promises.clear();
  }

  public static create(): PromiseChain {
    return new PromiseChain();
  }
}
