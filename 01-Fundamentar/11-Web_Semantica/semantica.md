O que é a web semântica?

É basicamente adicionar significado à uma linguagem, e no caso do HTML, para dar significado ao conteúdo.

É importante praticarmos, pois no caso de necessitarmos alterar algo na nossa página, saberemos entender melhor como estão organizadas as coisas na estrutura semântica.

Todo site é único, mas existem padrões ou convenções, que identificamos ambas intencional e não intencionalmente, e ao usar uma semântica consistente, ajudamos os user agents a identificar corretamente os elementos e apresentá-los aos visitantes da página.

Também é importante para acessibilidade, pense em alguém que use um leitor de página, por exemplo. Com uma página desorganizada, é difícil fazer um bom uso de nossa página.

Além disso, os motores de busca dão preferência à sites que têm sua semântica em dia, portanto um site bem estruturado é um site melhor encontrado na web.

Além de trabalhar com textos e links no HTML, temos que sempre pensar na estrutura que colocamos no HTML, mas conforme formos crescendo no nosso entendimento, melhor vai sendo nossa estrutura.

Podemos entender algumas estruturas comuns do HTML, por isso vamos falar sobre essas seções comuns que temos entre documentos, mas atenção que nem todas as páginas vão ter todas essas seções.

Cabeçalho <header> :
O cabeçalho do nosso site, o local onde geralmente fica a logo e o menu.

Navegação <nav> :
A navegação do site vai oferecer links para seções do site, o nosso menu. costuma ficar dentro da header, porém pode ficar em outros lugares, como em uma parte lateral, ou na parte de baixo.

Conteúdo principal <main> :
A parte do site aonde vai o conteúdo principal, no caso de um blog, teremos vários artigos, vários posts.

Conteúdo relacionado <aside>:
O conteúdo relacionado é algo que seja relacionado levemente ao nosso conteúdo principal, porém não tanto para ficar lá.

Rodapé <footer>
Onde ficam as informações da parte de baixo da página.

Exemplo básico de como ficaria um HTML semântico:

<body>
    <header>
        logomarca

        <nav>
            <ul>
                <li>item</li>
            </ul>
        </nav>
    </header>

    <main>
        conteúdo principal
    </main>

    <aside>
        parte lateral
    </aside>

    <footer>rodapé</footer>

</body>
Você pode perceber que não está ordenado, como no desenho que o Mayk fez, porém, isso é de ser esperado, já que o HTML trabalha apenas com a parte de informação do nosso site, enquanto o visual fica todo com o CSS.

# Header

Descrição
Vamos falar um pouco mais desse elemento estrutural e semântico que é o header. Primeiramente, não confunda o header com o head, são parecidos apenas na escrita, mas um possui er no final, então fique atento.

Primeiramente, quando no início de uma página, é visto como uma header global, mas também pode ser usado em outros elementos semânticos como article, section, entre outros.

Não use um header dentro de um header, nem dentro de um footer, isso quebra a semântica, a ideia do header.

Você também pode usar múltiplos headers, e ele não possui atributos específicos, apenas atributos globais, que são aplicáveis a todas as outras tags. O header também vai ocupar toda a linha na qual for aplicado

# Nav

Descrição
A tag Nav, esse elemento de navegação, vai servir para representar uma seção da nossa página que vai apontar para outras páginas, geralmente é usada dentro da header, e não necessariamente devam todos os links de sua página estar dentro de uma tag nav, é mais destinada para coisas importantes do site.

Porém, você pode sim ter mais de um nav na sua página, mas pense bem onde você vai deixar esse nav, já que ele é destinado a coisas importantes e especiais da página.

A tag nav não possui atributos específicos, apenas os globais.

# Main

Descrição
A tag main é para um conteúdo único da sua página, portanto, você vai utilizá-la apenas uma vez por página, e vai ser colocada direto do body, e não é legal deixar em qualquer outro lugar além de logo depois do body, entendemos a tag main como o foco central da página, o conteúdo principal da aplicação, então geralmente dentro dessa tag, não vamos deixar o nosso menu.

Exemplo de um main adequado, de uma página de receitas:

<body>

    <main>
        <h1>Receitas</h1>
        <p>Essa é uma página de receitas</p>

        <article>
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>

</body>
Essa estruturação semântica vai nos ajudar com a nossa própria organização, com o nosso CSS, com o Javascript, com o motor de buscas, acessibilidade, entre outros.

A tag main não possui atributos específicos, somente os globais

# Article

Descrição
A tag article vai criar blocos de conteúdo que estejam relacionados, exemplo a seguir:

<body>

    <main>
        <h1>Receitas</h1>
        <p>Essa é uma página de receitas</p>

        <article>
            <h2>Receita de torta de maçã</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>

        <article>
            <h2>Receita de torta de limão</h2>
            <p>Essa é uma receita de torta de maçã</p>
        </article>
    </main>

</body>
No caso do nosso exemplo, teremos receitas, mas também poderia ser de posts de um blog, fotografias, vai depender de o que seu site está fazendo.

A tag article não possui atributos específicos, somente os globais.

# Aside

Descrição
A tag aside é para conteúdos levemente relacionados ao conteúdo principal, como explicações do conteúdo, glossários, links extras, biografia do autor, informações de perfil e etc.

É uma tag fácil de se entender, porém fácil de se confundir, então evite atribuir a tag aside ao lado da página conforme você for aprendendo mais sobre HTML, CSS.

# Footer

Descrição
A tag footer é bem tranquila de se entender, ela fica no final da página e vai geralmente ter informações do autor da página, copyright, contato, sitemap, voltar ao topo, são algumas das coisas que aparecem geralmente no footer.

Abaixo um exemplo de como seria um HTML com footer:

<article>
    <h1>Sobre nós</h1>
    <p>Formamos um time de profissionais: </p>

    <ol>
        <li>Capacitados</li>
        <li>Gentis</li>
        <li>Honestos</li>
        <li>Gentils</li>
    </ol>

    <h2>Quem são</h2>
    <ul>
        <li>Harry Hair</li>
        <li>Dora Depiladora</li>
        <li>Massoterapeuta Massa</li>
        <li>Esteticista Ciça</li>
        <li>Pedo Curi</li>
        <li>Bárbara Brabeira</li>
        <li>Cecília (para seus cílios)</li>
    </ul>

</article>

<footer>
    <p>© 2020 Cabeleleila Leila</p>
</footer>
A tag footer não possui atributos específicos, somente os globais.


# Section
Descrição
A tag section serve para colocarmos seções na nossa página HTML, e uma dica de ouro: Geralmente se coloca um título e conteúdo na tag section. Antigamente usava-se uma div para fazer essas divisões e seções de conteúdos, mas semanticamente é mais apropriado usar uma tag section. Exemplo de uso a seguir:

<main>
    <h1>Receita 1</h1>
    <p>descrição da receita</p>

    <section>
        <h2> Modo de preparo</h2>
        <p>Modo de preparo</p>
    </section>
</main>
A tag section pode ser usada dentro de um article, e não possui atributos específicos, somente os globais.