import { IUniversityData } from "../../interfaces/iUniversityData";

import { FC } from "react";

export const UniversityCard: FC<{ data: IUniversityData }> = ({ data }) => {
  return (
    <div>
      <h1>{data.name}</h1>
      <span>{data.country}</span>
      <span>
                {data.webPages && data.webPages.map((page, index) => (
                    <p key={index}>{page}</p>
                ))}
      </span>
      <span>{data.alphaTwoCode}</span>
      <span>
        {data.domains.map(domain => (
          <p>{domain}</p>
        ))}
      </span>
      <span>{data.stateProvince || ''}</span>
    </div>
  );
};

export default UniversityCard;
