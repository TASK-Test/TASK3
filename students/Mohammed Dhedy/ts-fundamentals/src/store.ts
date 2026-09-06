class InMemoryStore<T extends { id: number }> {
  private items: T[] = [];
  public add(item: T): void {
    this.items.push(item);
  }
  public getAll(): T[] {
    let temp: T[] = this.items.slice();
    return temp;
  }
  public getById(id: number): T | undefined {
    let result: T | undefined = this.items.find((i) => i.id === id);
    return result;
  }
  public remove(id: number): void {
    let itemIndex = this.items.findIndex((i) => i.id === id);
    if (itemIndex != -1) this.items.splice(itemIndex, 1);
  }
}
