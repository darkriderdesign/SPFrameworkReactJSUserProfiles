import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IUserProfileStickerSheetWebPartProps } from './IUserProfileStickerSheetWebPartProps';
export default class UserProfileStickerSheetWebPart extends BaseClientSideWebPart<IUserProfileStickerSheetWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
