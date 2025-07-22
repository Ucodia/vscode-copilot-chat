import * as vscode from 'vscode';
import { Disposable } from '../../../util/vs/base/common/lifecycle';
import { IVSCodeExtensionContext } from '../../../platform/extContext/common/extensionContext';
import { IExtensionContribution } from '../../common/contributions';

export class SampleViewContribution extends Disposable implements vscode.WebviewViewProvider, IExtensionContribution {
    readonly id = 'sampleViewContribution';

    constructor(@IVSCodeExtensionContext private readonly context: IVSCodeExtensionContext) {
        super();
        this._register(vscode.window.registerWebviewViewProvider('sampleView', this));
    }

    resolveWebviewView(webviewView: vscode.WebviewView): void {
        webviewView.webview.options = { enableScripts: true };
        webviewView.webview.html = this.getHtml();
    }

    private getHtml(): string {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
</head>
<body>
    <h1>Sample Sidebar View</h1>
    <p>This is a sample webview.</p>
</body>
</html>`;
    }
}
