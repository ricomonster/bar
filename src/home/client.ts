export const sayHelloWorld = async (): Promise<unknown> => {
  const result = await fetch('/api/hello');
  return result.json();
};
