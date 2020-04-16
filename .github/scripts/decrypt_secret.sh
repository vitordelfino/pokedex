#!/bin/sh

# Decodifica o arquivo
mkdir $HOME/secrets
# --coloca em lote para impedir comando interativo --sim para afirmar "sim" para perguntas
gpg --quiet --batch --yes --decrypt --passphrase="$DECRYPT_SECRET_PASSPHRASE" \
--output $HOME/secrets/secret_key secret_key.gpg
