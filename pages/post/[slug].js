import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
// import {mdBidi} from 'markdown-it-bidi'

export async function getStaticPaths() {
    // Retrieve all our slugs
    const files = fs.readdirSync('posts')
    
    const paths = files.map((fileName) => ({

        params: {
            slug: fileName.replace('.md', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8')
    const { data: frontmattter, content } = matter(fileName)
    return {
        props: {
            frontmattter,
            content
        }
    }
}

export default function PostPage({ frontmattter, content }) {
    return (
        <div className='prose mx-auto'>
            <h1>{frontmattter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: md().render(content).replace('<em', '<div class="rtl"').replace('em>', 'div>') }} />
        </div>
    )
}
