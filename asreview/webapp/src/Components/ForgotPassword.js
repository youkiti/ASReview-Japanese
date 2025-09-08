import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from "@mui/material";
import * as React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import AuthAPI from "api/AuthAPI";

const ForgotPassword = ({ showNotification }) => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");

  const { isLoading, mutate, reset } = useMutation(AuthAPI.forgotPassword, {
    onSuccess: (data) => {
      let userId = data.user_id;
      navigate(`/reset_password?user_id=${userId}`);
    },
    onError: (data) => {
      console.error("Forgot password error", data);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    reset();
    mutate({ email });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <CardHeader title="パスワードを忘れましたか？" />
      <CardContent>
        <Stack spacing={3}>
          <Stack spacing={2}>
            {window.emailVerification && (
              <p>
                メールアドレスを入力し、送信ボタンをクリックしてください。メールが送信されます。
                メールが届かない場合は、迷惑メールフォルダを確認してください。
              </p>
            )}
            {!window.emailVerification && (
              <p>ASReviewアプリの管理者にお問い合わせください</p>
            )}
          </Stack>
          {window.emailVerification && (
            <Stack spacing={3}>
              <TextField
                label="メールアドレス"
                value={email}
                onChange={handleEmailChange}
                variant="outlined"
                fullWidth
                autoFocus
              />
            </Stack>
            // {isError && <InlineErrorHandler message={error.message} />}
          )}
        </Stack>
      </CardContent>

      <CardActions sx={{ p: 2 }}>
        {window.emailVerification && (
          <Button
            disabled={isLoading}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            送信
          </Button>
        )}
        <Button
          onClick={() => navigate("/signin")}
          sx={{ textTransform: "none" }}
        >
          サインインに戻る
        </Button>
      </CardActions>
    </>
  );
};

export default ForgotPassword;
