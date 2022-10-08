## Front-end usando Styled-components

A biblioteca styled-components nos permite criar estilos CSS para os componentes e criar temas. O front-end faz a conexão no back-end para persistir os dados de gastos do usuário. Cada usuário precisa estar logado para cadastrar, listar, excluir e atualizar seus próprios gastos. O código do back-end está disponível em [Servidor construído usando Express, TypeORM, JSON Web Token, Bcrypt e PostgreSQL](https://github.com/arleysouza/servidor-gasto-typeorm-jwt-bcrypt).
Aqui apenas aplicamos os estilos no código disponível em [Front-end para persistir dados no back-end] (https://github.com/arleysouza/front-gasto-typescript).


### Componentes
Cada item da pasta `src/components` possui um componente utilizado na contrução da página. No arquivo `style.ts` de cada componente está o estilo CSS do componente criado no arquivo `index.tsx`.

### Temas
Os temas possuem estilos que podem ser trocados. Aqui, criamos os temas dark e light no arquivo `src/styles/theme.ts`. Ambos os temas possuem as mesmas propriedades.
A interface DefaultTheme define as propriedades disponíveis em cada tema (`src/styles/theme.d.ts`). 

### Propagação do tema
Os temas são disponibilizados na árvore de componentes utilizando o conexto `ThemeContext` do pacote `styled-components`. O contexto `ThemeContext` precisa estar o mais alto possível na árvore de componente, então colocamos ele no arquivo `src/contexts/Auth.tsx`.