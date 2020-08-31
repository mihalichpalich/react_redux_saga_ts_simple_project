import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

import {ApplicationState} from "../../store";
import {Repository} from "../../store/ducks/repositories/types";
import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import RepositoryItem from "../RepositoryItem";

interface StateProps {
    repositories: Repository[]
}

interface DispatchProps {
    loadRequest(): void
}

// interface OwnProps {
//
// }

type Props = StateProps & DispatchProps

const RepositoryList: React.FC<Props> = ({repositories, loadRequest}) => {
    useEffect(() => {
        loadRequest()
    }, []);

    return (
        <ul>
            {repositories.map(repository => <RepositoryItem key={repository.id} repository={repository}/>)}
        </ul>
    )
};

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList)