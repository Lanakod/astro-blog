import rss from '@astrojs/rss';
import {getCollection} from 'astro:content';
import {SITE_TITLE, SITE_DESCRIPTION} from '../consts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const posts = await getCollection('blog');
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        xmlns: {
            yandex: "http://news.yandex.ru",
            media: "http://search.yahoo.com/mrss/",
            turbo: "http://turbo.yandex.ru",
        },
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            customData: "<turbo:extendedHtml>true</turbo:extendedHtml>" +
                "<turbo:source></turbo:source>\n" +
                "<turbo:topic></turbo:topic>" +
                `<turbo:content>${sanitizeHtml(parser.render(post.body), {
                    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
                })}</turbo:content>`,
            link: `/blog/${post.slug}/`,
        })),
    });
}