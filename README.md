# Rekt dogs subgraph

This subgraph provide an standard erc-721 implementation deployed into Polygon.

**Link to the hosted service subgraph :**
https://thegraph.com/hosted-service/subgraph/rtomas/rekt-dogs

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
