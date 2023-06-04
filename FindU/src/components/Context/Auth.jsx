import { createContext } from "react";

export const AuthContext = createContext({});

/*import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const Verificar = ({ children }) => {
  const [user, setUser] = useState;

  useEffect(() => {
    const Token = localStorage.getItem("token");
    const Storage = localStorage.getItem("user-dados");

    if (Token && Storage) {
      const Userok = JSON.parse(Storage)?.filter(
        (user) => user.email === JSON.parse(Token).email
      );

      if (Userok) set(Userok[0]);
    }
  }, []);

  const Entrar = (email, password) => {
    const Storage = JSON.parse(localStorage.getItem("user-dados"));
    const Userok = Storage?.filter((user) => user.email === email);

    if (Userok?.length) {
      if (Userok[0].email === email && Userok[0].password === password) {
        const token = Math.random().toString(36).substring(2);
        Storage.setItem("token", JSON.stringify({ email, token }));
        setUser({ email, password });
        return;
      } else {
        return "Email ou senha incorretos";
      }
    } else {
      return "Usuário não cadastrado";
    }
  };

  const Registar = (email, password) => {
    const Storage = JSON.parse(localStorage.getItem("user-dados"));
    const Userok = Storage?.filter((user) => user.email === email);

    if (Userok?.length) {
      return "Já existe uma conta com este email";
    }
    let newUser;

    if (Storage) {
      newUser = [...Storage, { email, password }];
    } else {
      newUser = [{ email, password }];
    }
    Storage.setItem("user-dados", JSON.stringify(newUser));

    return;
  };

  const Sair = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return;
  <AuthContext.Provider
    value={{ user, signed: !!user, Entrar, Registar, Sair }}
  >
    {children}
  </AuthContext.Provider>;
};*/
