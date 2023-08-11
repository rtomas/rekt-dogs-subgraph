# Rekt dogs subgraph

This subgraph provide an standard erc-721 implementation deployed into Polygon.

**Link to the hosted service subgraph :**
https://thegraph.com/hosted-service/subgraph/rtomas/rekt-dogs

**query the subgraph :**
https://api.thegraph.com/subgraphs/name/rtomas/rekt-dogs/graphql?query=query+Info+%7B%0A++dogsInfos%28first%3A+1%29+%7B%0A++++numTokens%0A++++numOwners%0A++++numAccounts%0A++%7D%0A%7D

---

**Contract from the collection :**
https://polygonscan.com/address/0xace8187b113a38f83bd9c896c6878b175c234dcc

**Link to opensea colection :**
https://opensea.io/collection/rektdogs

---

**Deploy the subgraph**

1. generate code:
   `graph codegen`

2. build
   `yarn build`

3. authenticate
   `graph auth --product hosted-service <hash>`

4. deploy
   `graph deploy --product hosted-service rtomas/rekt-dogs`
