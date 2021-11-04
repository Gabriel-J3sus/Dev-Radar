import ejs from 'ejs'

import { IEjsProvider } from '../IEjsProvider'

export class EjsProvider {

    static async renderHtmlFile({ name, args, opts }: IEjsProvider): Promise<string> {
        const htmlFile = await ejs.renderFile(
            `src/MailTemplates/${name}.ejs`,
            args || null,
            opts || {}
        )

        return htmlFile
    }
}