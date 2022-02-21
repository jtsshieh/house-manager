import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { mutate } from 'swr';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import { useDialogState } from '../lib/hooks/use-dialog-state';

export function DeleteConfirmation({
	open,
	item,
	handleClose,
	handleDelete,
}: {
	open: boolean;
	item: string;
	handleClose: () => void;
	handleDelete: () => void;
}) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>¿Eliminar {item}?</DialogTitle>
			<DialogContent>
				<DialogContentText>
					¿Está seguro de que quiere eliminar{' '}
					{(item.startsWith('el') ? 'este' : 'esta') + item.slice(2)}? ¡No puede
					recuperar!
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancelar</Button>
				<Button onClick={handleDelete} variant="contained" color="error">
					Eliminar
				</Button>
			</DialogActions>
		</Dialog>
	);
}
