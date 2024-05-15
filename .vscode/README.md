# Snippets do projeto.

## Create Component

### `component-init` ou `mci`

Cria a estrutura base pra criação de um componente.

```ts
import React from 'react';

export interface IComponentName extends React.IDefaultProps {}

const ComponentName: React.FC<IComponentName> = () => {
	return <></>;
};

export default ComponentName;
```

## Create Context

### `context-init` ou `mcti`

Cria a estrutura base pra criação de um contexto.

```ts
import React from 'react';

export interface IContextState {}

export type IPartialContextState = Partial<IContextState>;

export interface IProviderNameProps {
	initialState: IPartialContextState;
	children: React.ReactNode;
}

const ContextName = React.createContext<IPartialContextState>({});

const DEFAULT_STATE = {};

export const ProviderName: React.FC<IProviderNameProps> = ({ children }) => {
	return <ContextName.Provider value={{}}>{children}</ContextName.Provider>;
};

export default {
	Context: ContextName,
	Provider: ProviderName,
	useContextName: () => React.useContext(ContextName) as IContextState,
};
```

## Create Component with Styles

### `component-styles` ou `mcs`

Cria a estrutura base pra criação de um componente com a importação de estilo.

```ts
import React from 'react';

import * as Styles from './index.styled';

export interface IComponentName extends React.IDefaultProps {}

const ComponentName: React.FC<IComponentName> = () => {
	return <></>;
};

export default ComponentName;
```

## Create Page

### `page-ini` ou `mpi`

Cria a estrutura base pra criação de um arquivo de página.

```ts
import React from 'react';

const PageName: React.FC = () => {
	return <></>;
};

export default PageName;
```

## Inicialize Router Component

### `route-init` ou `mri`

Cria a estrutura base pra criação de um arquivo de rotas.

```ts
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LazyRoute } from 'Components';

const MyPages = {
	Page: React.lazy(() => import('./index')),
};

const RoutesName = () => {
	return (
		<Routes>
			<Route path='' element={<LazyRoute>{<MyPages.Page />}</LazyRoute>} />
		</Routes>
	);
};

export default RoutesName;
```

## Inicialize Styled Component

### `styled-init` ou `msi`

Cria a estrutura base pra criação dos estilos de um arquivo.

```ts
import styled from 'styled-components';

export const Container = styled.div``;
```

## Inicialize Test Component

### `test-component` ou `mtc`

Cria a estrutura base pra criação dos testes de componentes.

```ts
import { render } from 'Tests/CustomRender';

import ComponentName from '.';

describe('<ComponentName />', () => {
	it('Testing render.', () => {
		render(<ComponentName />);
	});
});
```

## Create Test It for component

### `test-it-component` ou `mtic`

Cria um bloco de it para testes de componentes.

```ts
it('', () => {
	render();
});
```

## Inicialize Test Hook

### `test-hook` ou `mth`

Cria a estrutura base pra criação dos testes de hooks.

```ts
import { renderHook } from 'Tests/CustomRender';

import useHookName from '.';

describe('useHookName', () => {
	it('Testing render.', () => {
		const { state } = renderHook<{}>(() => useHookName());
	});
});
```

## Create Test It for hook

### `test-it-hook` ou `mtih`

Cria um bloco de it para testes de hooks.

```ts
it('', () => {
	const { state } = renderHook<{}>(() => );
});
```

## Create docs for Component

### `doc-component` ou `mdc`

Cria a estrutura base pra documentação de um componente.

```mdx
---
name: ComponentName
route: /components/component-name
menu: Components
---

import { Props } from 'docz';

import ComponentName from './index.tsx';
import Playground from '../Playground/index.tsx';

# ComponentName

## Propriedades

<Props of={ComponentName} />

## Componente

<Playground>
	<ComponentName />
</Playground>
```

## Create docs for Hooks

### `doc-hooks` ou `mdh`

Cria a estrutura base pra documentação de um hook.

```mdx
---
name: useMyHook
route: /hooks/my-hook
menu: Hooks
---

# useMyHook

...

## Como utilizar

...

## Parâmetros

...
```

## Import styles

### `import-styles` ou `mis`

Faz a importação do arquivo de styles.

```ts
import * as Styles from './index.styled';
```
