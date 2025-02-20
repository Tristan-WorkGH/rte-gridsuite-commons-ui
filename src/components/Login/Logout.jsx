/**
 * Copyright (c) 2020, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Link,
    Typography,
} from '@mui/material';
import { LogoutOutlined as LogoutOutlinedIcon } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';

const styles = {
    paper: (theme) => ({
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }),
    avatar: (theme) => ({
        margin: theme.spacing(1),
        backgroundColor: theme.palette.error.main,
    }),
    submit: (theme) => ({
        margin: theme.spacing(3, 0, 2),
        borderRadius: '30px',
    }),
};

const Logout = ({ onLogoutClick, disabled }) => {
    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="#">
                    GridSuite
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={styles.paper}>
                <Avatar sx={styles.avatar}>
                    <LogoutOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    <FormattedMessage
                        id="login/logout"
                        defaultMessage={'logout'}
                    />{' '}
                    ?
                </Typography>

                <Button
                    disabled={disabled}
                    fullWidth
                    variant="contained"
                    sx={styles.submit}
                    onClick={onLogoutClick}
                >
                    <FormattedMessage
                        id="login/logout"
                        defaultMessage={'logout'}
                    />
                </Button>
            </Box>
            <Box mt={2}>
                <Copyright />
            </Box>
        </Container>
    );
};

export default Logout;
