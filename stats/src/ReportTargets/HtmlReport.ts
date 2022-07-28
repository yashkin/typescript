import { OutputTarget } from "../Summary";
import fs from 'fs';

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
        <div>
        <h1>Analysis Output</h1>
        </div>
         <div>
        <h1>${report}</h1>
        </div>
        `
        fs.writeFileSync('report.html', html)
    }

}