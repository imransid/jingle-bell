import moment from 'moment';

import { type IQualityDefect } from '@/store/slices/features/Defect/types';
import {
  type IQualityData,
  type IQualityEntry,
  type IVariance
} from '@/store/slices/features/endTableCheck/types';

export interface IProps {
  orderEntity: number;
  workProcess: number;
  organization: number;
  style: number;
  qualityType: number;
  checkOutput: string;
  deviceId: string;
  repaired: boolean;
  variance?: IVariance | null;
  defectList: IQualityEntry[];
}

export const createDefectArray = (defectList: IQualityDefect[]): IQualityEntry[] => {
  try {
    let defectData: IQualityEntry[] = [];

    if (defectList != null && defectList.length > 0) {
      defectData = defectList.map(({ defecType, defect, ...rest }: any) => ({
        ...rest,
        defect: {
          id: defect.id
        },
        organization: rest.organization,
        imageId: rest.imageId,
        partId: rest.partId,
        positionX: rest.positionX,
        positionY: rest.positionY,
        operation: rest.operation
      }));
    }

    return defectData;
  } catch (err) {
    return [];
  }
};

export const GenericTransaction = (props: IProps): IQualityData[] => {
  try {
    const pramsList: IQualityData[] = [];
    const pramsObj: IQualityData = {
      orderEntity: {
        id: 0
      },
      workProcess: {
        id: 0
      },
      organization: {
        id: 0
      },
      style: {
        id: ''
      },
      qualityType: {
        id: 0
      },
      newQualityDefect: [],
      sampleSize: 0,
      checkOutput: '',
      productionTime: '',
      transactionId: '',
      deviceId: '',
      isRepaired: false
    };

    const sampleSize = 1;
    const newCreateAtString = moment().format('YYYY-MM-DDTHH:mm:ss');

    pramsObj.deviceId = props.deviceId.toString();
    pramsObj.isRepaired = props.repaired;
    pramsObj.transactionId = GenerateUniqueID();
    pramsObj.checkOutput = props.checkOutput;
    pramsObj.productionTime = newCreateAtString;
    pramsObj.orderEntity.id = props.orderEntity;
    pramsObj.organization.id = props.organization;
    pramsObj.style.id = props.style.toString();
    pramsObj.workProcess.id = props.workProcess;
    pramsObj.sampleSize = sampleSize;
    pramsObj.qualityType.id = props.qualityType;
    pramsObj.newQualityDefect = props.defectList;

    if (props.variance !== null && props.variance !== undefined) {
      pramsObj.varience = props.variance;
    }

    pramsList.push(pramsObj);

    return pramsList;
  } catch (err) {
    return [];
  }
};

export const GenerateUniqueID = (): string => {
  const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  return pattern.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
