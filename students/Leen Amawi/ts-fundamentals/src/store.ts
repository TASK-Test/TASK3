export class InMemoryStore<T extends { id: number }> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }

  getById(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  remove(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
export function byField<T, K extends keyof T>( items: T[],key: K,value: T[K]): T[] {
  return items.filter((item) => item[key] === value);
}
