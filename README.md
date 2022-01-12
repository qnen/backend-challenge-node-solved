# BACKEND-CHALLENGE-NODE
Resolução do desafio técnico - Backend API Investimento

### Para correta instalação e execução desse projeto, é recomendada ter globalmente instalado "node, npm, yarn" (O yarn nas versões mais recentes já suporta a execução do jest sem prévia configuração).
## Instalação
`npm install`
## Execução
`npm run dev`
# Documentação
**Inclusão Cliente**
----
  Cria um novo cliente.

* **URL**

  /clients

* **Método:**

  `POST`
  
*  **URL Parâmetros**

   Nenhum

* **Data Parâmetros**

  `nome` | `cpf` | `dtNascimento` | `ativo`

* **Resposta de Sucesso:**

  * **Code:** 201 <br />
    **Content:** `{ Cliente XXXXX criado com sucesso. XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX" }`
 
* **Resposta de Erro:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Cliente já existente." }`

  OU

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Algo deu errado. =(" }`

* **Chamada Simples:**

  ```json
  {
    "nome": "Fulano",
    "cpf": "00000000000",
    "dtNascimento": "01-01-1990",
    "ativo": true
  }
  ```
----
  **Inclusão Produto**
----
  Cria um novo Produto.

* **URL**

  /products

* **Método:**

  `POST`
  
*  **URL Parâmetros**

   Nenhum

* **Data Parâmetros**

  `nome` | `ativo`

* **Resposta de Sucesso:**

  * **Code:** 201 <br />
    **Content:** `{ Produto XXXXX criado com sucesso. XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX" }`
 
* **Resposta de Erro:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Produto já existente." }`

  OU

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Algo deu errado. =(" }`

* **Chamada Simples:**

  ```json
  {
    "nome": "GOGL34",
    "ativo": true
  }
  ```
----
  **Inclusão Ordem**
----
  Cria uma nova Ordem.

* **URL**

  /products

* **Método:**

  `POST`
  
*  **URL Parâmetros**

   Nenhum

* **Data Parâmetros**

  `idCliente` | `idProduto` | `valorCompra` | `qtdCompra`

* **Resposta de Sucesso:**

  * **Code:** 201 <br />
    **Content:** `{ Ordem criada com sucesso. XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX" }`
 
* **Resposta de Erro:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Estamos processando sua ordem. Aguarde alguns segundos e tente novamente" }`
    
  OU

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Cliente não existente. Informe um cliente válido" }`
    
   OU

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Produto não existente. Informe um produto válido" }`

  OU

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Algo deu errado. =(" }`

* **Chamada Simples:**

  ```json
  {
    "idCliente": "XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX",
    "idProduto": "XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX",
    "valorCompra": 10.0,
    "qtdCompra": 5
  }
  ```
----
  **Consulta Ordem**
----
  Retorna os dados json de uma única Ordem existente cadastrada.

* **URL**

  /products:idTransacao

* **Método:**

  `GET`
  
*  **URL Parâmetros**

   **Required:**
 
   `idTransacao=[string]`

* **Data Parâmetros**

    Nenhum

* **Resposta de Sucesso:**

  * **Code:** 200 <br />
    **Content:** `{ Ordem criada com sucesso. XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX" }`
 
* **Resposta de Erro:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ message : "Algo deu errado. =(" }`

* **Chamada Simples:**

  `GET: /orders/XXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXX`
  
----
