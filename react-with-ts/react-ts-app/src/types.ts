type Info = {
  id: number;
  name: string;
  age: number;
  email: string;
};

type AdminInfo = Info & {
  role: string;
};

export { type Info, type AdminInfo };
