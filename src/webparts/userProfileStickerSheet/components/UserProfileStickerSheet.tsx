import * as React from 'react';
import styles from './UserProfileStickerSheet.module.scss';
import { IUserProfileStickerSheetProps } from './IUserProfileStickerSheetProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { UserProfile_Girl_1 } from './UserProfile_Girl_1';
import { UserProfile_Boy_1 } from './UserProfile_Boy_1';

export default class UserProfileStickerSheet extends React.Component<IUserProfileStickerSheetProps, void> {
  public render(): React.ReactElement<IUserProfileStickerSheetProps> {
      return (
         <div> <UserProfile_Girl_1 />
          <UserProfile_Boy_1 />
         </div>
    );
  }
}
