/**
 * 延迟
 */
export async function delay(timeout: number): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, timeout);
  });
}

/**
 * 漂亮打印对象
 */
export function stringify(obj: any): string {
  return JSON.stringify(obj, null, 2);
}
