import mjml2html from 'mjml';

export async function convert(event, context, callback) {
  return mjml2html(event.mjml, {
      beautify: true,
      minify: true,
      keepComments: false,
      validationLevel: 'skip'
  });
}
