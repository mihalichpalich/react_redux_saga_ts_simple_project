import React, {useEffect, useState} from 'react';


interface Props {
    repositories: Repository[]
}

const RepositoryList: React.FC<Props> = ({repositories}) => {
    const [newRepository, setNewRepository] = useState<string>('');

    useEffect();

    return (
        <ul>
            {repositories.map(repository => <li>{repository.name}</li>)}
        </ul>
    )
};

export default RepositoryList